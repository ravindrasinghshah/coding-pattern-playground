import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

type InfoDialogProps = {
  title: string;
  eyebrow: string;
  children: ReactNode;
  onClose: () => void;
};

export function InfoDialog({ title, eyebrow, children, onClose }: InfoDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.showModal();
    return () => dialog.close();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="info-dialog"
      aria-labelledby="info-dialog-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="info-dialog-card">
        <div className="info-dialog-header">
          <div>
            <span className="overline">{eyebrow}</span>
            <h2 id="info-dialog-title">{title}</h2>
          </div>
          <button className="dialog-close" type="button" onClick={onClose} aria-label={`Close ${title}`}>
            <X size={18} />
          </button>
        </div>
        <div className="info-dialog-content">{children}</div>
      </div>
    </dialog>
  );
}
