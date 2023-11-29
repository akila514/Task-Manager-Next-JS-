import { Card } from "@/components/ui/card";

interface TaskTileProps {
  title: string;
}
const TaskTile = ({ title }: TaskTileProps) => {
  return (
    <Card className="rounded-md p-2 bg-[#242424] text-white hover:bg-[#3b3b3b] my-2 font-medium">
      {title}
    </Card>
  );
};

export default TaskTile;
