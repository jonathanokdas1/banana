import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const MyDatePicker = ({ selectedDate, setSelectedDate }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      className="p-2 border border-gray-300 rounded-md w-full dark:bg-gray-800 dark:text-white" // Adicionada compatibilidade com tema claro/escuro
      placeholderText="Filtrar por Data"
      dateFormat="dd/MM/yyyy"
    />
  );
};
