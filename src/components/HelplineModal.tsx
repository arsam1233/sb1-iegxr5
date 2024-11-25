import { X, Phone, Mail } from 'lucide-react';
import { useEffect } from 'react';

interface HelplineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HelplineModal({ isOpen, onClose }: HelplineModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">24/7 Support Lines</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 bg-rose-50 rounded-lg">
            <h3 className="font-semibold text-rose-800 flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              Emergency Helpline
            </h3>
            <p className="text-rose-600 text-xl font-bold">1-800-662-4357</p>
            <p className="text-sm text-rose-700 mt-1">Available 24/7, completely confidential</p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              Email Support
            </h3>
            <p className="text-blue-600">support@pathtorecovery.org</p>
            <p className="text-sm text-blue-700 mt-1">Response within 24 hours</p>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            If you're experiencing a medical emergency, please dial 911 immediately.
          </p>
        </div>
      </div>
    </div>
  );
}