import React from 'react';
import Image from 'next/image';

const ProfilePicture = () => {
  return (
    <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/20 md:ml-8">
      <Image
        src="/images/arsim-ajv.jpg"
        alt="Profile Picture"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};

export default ProfilePicture;
