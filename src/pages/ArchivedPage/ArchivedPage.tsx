import { PageLayout } from '@/components/layout/PageLayout';
import { ComingSoonState } from '@/components/feedback/ComingSoonState';

export const ArchivedPage = () => (
  <PageLayout>
    <ComingSoonState
      title="Módulo de notas archivadas próximamente"
      description="Aquí podrás consultar y restaurar tus notas archivadas cuando esta sección esté disponible."
    />
  </PageLayout>
);
