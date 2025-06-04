import Link from 'next/link';

const linkClass = 'block md:inline hover:underline';

export function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <Link href="/" className={linkClass} onClick={onClick}>Home</Link>
      <Link href="/product" className={linkClass} onClick={onClick}>Product</Link>
      <Link href="/pricing" className={linkClass} onClick={onClick}>Pricing</Link>
    </>
  )
}

export function RequestDemo({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <Link href="/request-demo" className={linkClass} onClick={onClick}>Request Demo</Link>
    </>
  )
}

export function AddtlLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <Link href="/about" className={linkClass} onClick={onClick}>About</Link>
    </>
  );
}

export function AuthLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <Link href="/login" className={linkClass} onClick={onClick}>Login</Link>
      <Link href="/register" className={linkClass} onClick={onClick}>Register</Link>
    </>
  );
}

export function LegalLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <Link href="/privacy-policy" className={linkClass} onClick={onClick}>Privacy Policy</Link>
      <Link href="/terms-of-service" className={linkClass} onClick={onClick}>Terms of Service</Link>
      <Link href="/cookie-policy" className={linkClass} onClick={onClick}>Cookie Policy</Link>
    </>
  );
}