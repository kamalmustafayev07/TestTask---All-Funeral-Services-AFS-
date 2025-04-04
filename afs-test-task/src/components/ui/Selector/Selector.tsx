import React, { useEffect, useMemo, useState } from "react";
import { cn } from "../../../lib/utils";
import styles from "./Selector.module.css";
import { ChevronDownIcon } from "../../../assets/Icons";

interface SelectorProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  options: string[];
  multiple?: boolean;
  defaultValue?: string | string[];
}

const Selector: React.FC<SelectorProps> = ({
  className,
  options = [],
  multiple = false,
  defaultValue,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const initialSelected = useMemo(() => {
    if (multiple) {
      const defaultArray = Array.isArray(defaultValue) ? defaultValue : [];
      return defaultArray.length > 0 ? defaultArray : [options[0] || ""];
    } else {
      return typeof defaultValue === "string" ? defaultValue : options[0] || "";
    }
  }, [defaultValue, multiple, options]);

  const [selected, setSelected] = useState<string | string[]>(initialSelected);

  const mergedOptions = useMemo(() => {
    if (multiple && Array.isArray(selected)) {
      const missing = selected.filter((val) => !options.includes(val));
      return [...options, ...missing];
    } else if (!multiple && typeof selected === "string" && !options.includes(selected)) {
      return [...options, selected];
    }
    return options;
  }, [options, selected, multiple]);

  const toggleOption = (option: string) => {
    if (!option) return;

    if (multiple) {
      setSelected((prev) => {
        const selectedArray = Array.isArray(prev) ? prev : [];
        const isSelected = selectedArray.includes(option);

        if (isSelected) {
          if (selectedArray.length === 1) return selectedArray; 
          return selectedArray.filter((item) => item !== option);
        } else {
          return [...selectedArray, option];
        }
      });
    } else {
      setSelected(option);
      setIsOpen(false);
    }
  };

  const displayValue = multiple
    ? (selected as string[]).join(", ")
    : selected;

  useEffect(() => {
    if (props.onChange) {
      props.onChange({
        target: {
          name: props.name,
          value: selected,
        },
      } as any);
    }
  }, [selected]);

  return (
    <div className={cn(styles.wrapper, className)}>
      <input
        type="text"
        readOnly
        value={displayValue}
        className={styles.input}
        onClick={() => setIsOpen(!isOpen)}
      />
      <ChevronDownIcon
        className={styles.icon}
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <ul className={styles.dropdown}>
          {mergedOptions.map((option) => {
            const isSelected = multiple
              ? (selected as string[]).includes(option)
              : selected === option;

            return (
              <li
                key={option}
                className={styles.option}
                onClick={() => toggleOption(option)}
              >
                {multiple && isSelected && (
                  <span className={styles.selected}>✔</span>
                )}
                {option}
              </li>
            );
          })}
        </ul>
      )}

      {/* Hidden input for form value */}
      <input
        type="hidden"
        name={props.name}
        value={multiple ? (selected as string[]).join(",") : (selected as string)}
      />
    </div>
  );
};

export default Selector;
