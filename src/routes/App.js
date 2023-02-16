import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './HomePage';
import {NewTodoPage} from './NewTodoPage';
import { EditTodoPage} from './EditTodoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;