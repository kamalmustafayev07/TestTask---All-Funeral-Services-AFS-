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

// Форматирование номера
export function formatPhoneNumber(phone: string): string {
  
  return `+1 ${phone.slice(1, 4)} ${phone.slice(4, 7)} ${phone.slice(7)}`;
}