import React, { useState } from 'react';

function EmailModal({ isOpen, onClose, email }) {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[50rem]">
        <h2 className="text-xl font-semibold mb-4">Send me an email</h2>
        <label className="block text-sm font-medium mb-2">Subject</label>
        <input 
          type="text" 
          value={subject} 
          onChange={(e) => setSubject(e.target.value)} 
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter subject" 
          required
        />
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your message"
          rows="8"
          style={{ minHeight: '100px', maxHeight: '500px', resize: 'vertical' }}
          required
        />
        <div className="flex justify-end">
          <button onClick={onClose} className="px-4 py-2 mr-2 bg-gray-200 rounded">Cancel</button>
          <button onClick={handleSend} className="px-4 py-2 bg-purple-700 text-white rounded">Send</button>
        </div>
      </div>
    </div>
  );
}

export default EmailModal;
