import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <dialog ref={ref} className="result-modal">
      {userLost && <h2>You lost</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
        {/* when you use form and set it method attribute to 'dialog', the button inside it can be
        used to close the dialog popoup without adding extra javascript */}
      </form>
    </dialog>
  );
});

export default ResultModal;
