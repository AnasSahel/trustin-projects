import { Button } from '@/components/ui';
import { LuPlus } from 'react-icons/lu';

export default function WorkflowPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">Products</h1>
        <Button className="ml-auto" size="sm">
          <LuPlus className="h-4 w-4" /> New Workflow
        </Button>
      </div>
    </>
  );
}
