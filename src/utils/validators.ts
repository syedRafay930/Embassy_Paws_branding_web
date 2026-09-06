// src/utils/validators.ts

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isRequired = (value: string | undefined | null): boolean => {
  if (!value) return false;
  return value.trim().length > 0;
};