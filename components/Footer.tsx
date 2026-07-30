import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-hairline-dark bg-bg-primary pt-20 pb-10" role="contentinfo">
      <div className="container-wide px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="font-display text-2xl lg:text-3xl text-crisp-white mb-6 max-w-md">
              Let&apos;s build the future of artificial intelligence and creativity together.
            </h2>
            <Link href="/#contact" className="inline-block border border-hairline-light rounded-full px-6 py-2 text-sm text-crisp-white hover:bg-electric-cyan hover:text-bg-primary hover:border-electric-cyan transition-colors">
              Get in Touch
            </Link>
          </div>
          
          <div>
            <h3 className="font-body font-medium text-crisp-white mb-4">Contact</h3>
            <p className="text-cool-grey text-sm mb-4">
              <a href="mailto:shaikhtahsin84@gmail.com" className="hover:text-electric-cyan transition-colors">shaikhtahsin84@gmail.com</a><br />
              <a href="tel:+918406939132" className="hover:text-electric-cyan transition-colors">+91 8406939132</a>
            </p>
            <p className="text-cool-grey text-sm">
              New Delhi, India
            </p>
          </div>

          <div>
            <h3 className="font-body font-medium text-crisp-white mb-4">Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/#work" className="text-cool-grey hover:text-electric-cyan text-sm transition-colors">Work</Link></li>
              <li><Link href="/about" className="text-cool-grey hover:text-electric-cyan text-sm transition-colors">About</Link></li>
              <li><a href="https://www.linkedin.com/in/md-tahsin-03949b334?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-cool-grey hover:text-electric-cyan text-sm transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="hairline mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cool-grey text-xs">
            &copy; {new Date().getFullYear()} Md Tahsin. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-cool-grey hover:text-crisp-white text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-cool-grey hover:text-crisp-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
