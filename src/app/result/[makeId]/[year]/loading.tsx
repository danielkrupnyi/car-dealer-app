import { Container } from "@/components/Container";
import { ModelsListSkeleton } from "@/components/Skeletons/ModelsListSkeleton";

const Loading = () => {
  return (
    <Container>
      <ModelsListSkeleton />
    </Container>
  );
};

export default Loading;
