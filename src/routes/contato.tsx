// src/components/ContactForm.tsx

import React, { useState } from 'react';

// Define o tipo para os dados do formulário
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Define o tipo para os erros de validação
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contato: React.FC = () => {
  // Estado para guardar os dados do formulário
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  // Estado para guardar as mensagens de erro
  const [errors, setErrors] = useState<FormErrors>({});
  
  // Estado para mostrar a mensagem de sucesso
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Função para validar o formulário
  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    // Validação do Nome (mínimo 3 caracteres)
    if (formData.name.trim().length < 3) {
      newErrors.name = 'O nome deve ter pelo menos 3 caracteres.';
    }

    // Validação do Email (formato válido)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex simples para formato de email
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Por favor, insira um email válido (ex: nome@provedor.com).';
    }

    // Validação da Mensagem (mínimo 10 caracteres)
    if (formData.message.trim().length < 10) {
      newErrors.message = 'A mensagem deve ter pelo menos 10 caracteres.';
    }

    return newErrors;
  };

  // Função para lidar com a mudança nos inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Impede o recarregamento da página
    const validationErrors = validate();
    setErrors(validationErrors);

    // Se não houver erros, o formulário é válido
    if (Object.keys(validationErrors).length === 0) {
      console.log('Formulário enviado com sucesso:', formData);
      setIsSubmitted(true);
      // Limpa o formulário
      setFormData({ name: '', email: '', message: '' });
      // Remove a mensagem de sucesso após alguns segundos
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      console.log('Formulário com erros de validação.');
    }
  };

  return (
    <div className="flex items-center justify-center h-auto bg-white-100 mt-10">
      <div className="w-full max-w-md p-10 space-y-6 bg-sky-500 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white">Contato</h1>
        
        {isSubmitted && (
            <div className="p-4 text-center text-white bg-green-500 rounded-md">
                Mensagem enviada com sucesso!
            </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-white">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu nome"
              className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
            {errors.name && <p className="mt-1 text-sm text-red-200">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu email"
              className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
            {errors.email && <p className="mt-1 text-sm text-red-200">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium text-white">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Digite sua mensagem"
              rows={5}
              className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300"
            ></textarea>
            {errors.message && <p className="mt-1 text-sm text-red-200">{errors.message}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 mt-4 font-semibold text-white transition-colors duration-300 bg-transparent border-2 border-white rounded-md hover:bg-white hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-600 focus:ring-white"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contato;