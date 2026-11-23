import { useId } from 'react';
import styles from './SegmentedToggle.module.css';

interface SegmentedToggleProps<T extends string> {
  legend: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}

/** A radio group styled as a segmented control. Arrow keys work natively. */
export function SegmentedToggle<T extends string>({ legend, options, value, onChange }: SegmentedToggleProps<T>) {
  const name = useId();
  return (
    <fieldset className={styles.toggle}>
      <legend className="visually-hidden">{legend}</legend>
      {options.map((option) => (
        <label key={option.value} className={styles.option}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className={styles.input}
          />
          <span className={styles.label}>{option.label}</span>
        </label>
      ))}
    </fieldset>
  );
}
