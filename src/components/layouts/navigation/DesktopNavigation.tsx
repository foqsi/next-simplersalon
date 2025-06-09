import { NavLinks, RequestDemoNav } from '@/components/NavLinks';

export default function DesktopNavigation({ onClick }: { onClick?: () => void }) {
  return (
    <nav className="flex items-center gap-6">
      <div className="flex items-center gap-4 px-6 py-2">
        <NavLinks onClick={onClick} />
        <RequestDemoNav onClick={onClick} />
      </div>
    </nav>
  );
}
