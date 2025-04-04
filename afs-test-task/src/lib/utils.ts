import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

// Функция для форматирования даты в формат "ДД.ММ.ГГГГ"
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0'); 
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear();
  
  return `${day}.${month}.${year}`;
}

// Функция для преобразования массива типов в строку
export function formatType(types: string[]): string {
  return types
    .map(type => {
      return type
        .split('_') 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(' '); 
    })
    .join(', ');
}

// Функция для преобразования массива типов в строку с нормализованными словами
export function formatSelectorType(types: string[]): string[] {
  return types.map(type => {
    return type
      .split('_')  // Разделяем по подчеркиванию
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())  // Заглавная буква и оставшаяся часть - маленькая
      .join(' ');  // Объединяем обратно в строку с пробелами
  });
}


export function formatPhoneNumber(phone: string): string {
  // Оставляем только цифры
  let cleaned = phone.replace(/\D/g, "");

  // Добавляем "1" в начало, если его нет
  if (!cleaned.startsWith("1")) {
    cleaned = "1" + cleaned;
  }

  // Ограничиваем длину до 11 цифр
  cleaned = cleaned.slice(0, 11);

  // Формируем отформатированный номер
  let formatted = `+1 `;
  if (cleaned.length > 1) formatted += cleaned.slice(1, 4);
  if (cleaned.length > 4) formatted += ` ${cleaned.slice(4, 7)}`;
  if (cleaned.length > 7) formatted += ` ${cleaned.slice(7)}`;

  return formatted.trim();
}

