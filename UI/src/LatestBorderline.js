import React from 'react';

function LatestBorderline() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Latest Borderline</h2>
      <div className="bg-gray-100 p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">HCT</div>
            <div className="text-lg font-bold">44.4</div>
          </div>
          <div className="text-sm text-gray-500">Normal range 36 - 46 g/dL</div>
        </div>
        <div className="mt-4">
          {/* Add borderline indicator component here */}
        </div>
      </div>
    </div>
  );
}

export default LatestBorderline;