import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app element for accessibility

const ArticleModal = ({ isOpen, onRequestClose, article }) => {
  if (!article) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Article Modal">
      <div className="p-4">
        {article.urlToImage && (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
        )}
        <h3 className="text-lg font-semibold text-gray-800 mt-4">
          {article.title}
        </h3>
        <p className="text-gray-600">{article.description}</p>
        <a
          href={article.url}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
        <button onClick={onRequestClose} className="mt-4 bg-gray-800 text-white p-2 rounded">
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ArticleModal;
