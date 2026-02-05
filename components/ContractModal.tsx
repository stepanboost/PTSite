'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, FileText } from 'lucide-react'

interface ContractModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContractModal({ isOpen, onClose }: ContractModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white border border-neutral-200/60 rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900">Шаблон договора</h3>
                    <p className="text-sm text-neutral-600">Пример документа</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white border border-neutral-200/60 hover:bg-neutral-50 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-neutral-600" />
                </button>
              </div>

              {/* Content */}
              <div className="text-center py-12">
                <div className="w-24 h-24 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-12 h-12 text-neutral-400" />
                </div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                  Шаблон договора в подготовке
                </h4>
                <p className="text-sm text-neutral-600 mb-6 max-w-md mx-auto">
                  Мы готовим актуальный шаблон договора для ознакомления. 
                  Скоро он будет доступен для скачивания.
                </p>
                <p className="text-xs text-neutral-500">
                  {/* TODO: подключить PDF файл */}
                  TODO: подключить PDF файл договора
                </p>
              </div>

              {/* Footer */}
              <div className="flex justify-center gap-3 pt-6 border-t border-neutral-200/60">
                <button
                  onClick={onClose}
                  className="btn-secondary text-sm px-6 py-2.5"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
