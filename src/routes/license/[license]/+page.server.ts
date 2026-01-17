import rawLicenses from "$lib/data/license-data.json";

export const prerender = true;

type LicenseInfo = {
  licenses: string;
  repository?: string;
  publisher?: string;
  path: string;
  licenseFile: string;
};

const licenses = rawLicenses as Record<string, LicenseInfo>;

export function entries() {
  return Object.keys(licenses).map(name => ({
    license: name.replaceAll("/", "__")
  }));
}

export function load({ params }) {
  const original = params.license.replaceAll("__", "/");
  const info = licenses[original];

  if (!info) {
    throw new Error("Package Not Found");
  }

  return {
    name: original,
    info
  };
}