interface FormErrorsProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
}
import { XCircle } from "lucide-react";

export default function FormErrors({ id, errors }: FormErrorsProps) {
  if (!errors) return null;
  return (
    <div
      id={`${id}-error`}
      aria-live="polite"
      className="mt-2 text-sm text-rose-500"
    >
      {errors?.[id]?.map((error: string) => (
        <div
          key={error}
          className="flex items-center font-medium p-2 border border-rose-500 rounded-sm bg-rose-500/10"
        >
          <XCircle className="h-4 w-4 mr-2" />
          {error}
        </div>
      ))}
    </div>
  );
}
