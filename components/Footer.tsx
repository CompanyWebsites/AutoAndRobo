export default function Footer() {
  return (
    <footer className="grid-dark">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-8 border-t border-paper/10 pt-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-paper">
              Thapak Automotive and Robotics Pvt. Ltd.
            </p>
            <p className="mt-2 max-w-sm text-sm text-paper/50">
              Advanced engineering. Robotics. Aerospace. Clean technology.
              Established 2018.
            </p>
          </div>
          <div className="flex gap-10">
            <div>
              <p className="font-mono text-[12px] text-paper/40">Domains</p>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-paper/60">
                <li>Automation</li>
                <li>Robotics</li>
                <li>Aerospace &amp; drones</li>
                <li>Automotive</li>
                <li>Clean technology</li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[12px] text-paper/40">Company</p>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-paper/60">
                <li><a href="#about" className="hover:text-paper">About</a></li>
                <li><a href="#flagship" className="hover:text-paper">Air purification</a></li>
                <li><a href="#partner" className="hover:text-paper">Partner with us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-12 font-mono text-[11px] text-paper/30">
          © {new Date().getFullYear()} Thapak Automotive and Robotics Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
