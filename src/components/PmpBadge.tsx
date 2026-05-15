import pmpBadge from '../assets/images/project-management-professional-pmp.png';

const PmpBadge = () => {
  return (
    <a
      href="https://www.credly.com/badges/30623d2d-75ea-40b6-aa20-c563f2819df0/public_url"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 group"
    >
      <img
        src={pmpBadge}
        alt="PMP Certification Badge"
        className="w-10 h-10 group-hover:scale-105 transition-transform"
      />
      <span className="text-sm font-semibold text-gray-500 group-hover:text-main transition-colors">
        PMP® Certified<br />
        <span className="font-normal text-xs underline">Verify on Credly</span>
      </span>
    </a>
  );
};

export default PmpBadge;
