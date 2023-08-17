import ContentLoader from "react-content-loader";

export default function ProductLoader({ size }) {
  return (
    <ContentLoader
      speed={2}
      width={200}
      height={400}
      viewBox="0 0 200 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      //   {...props}
    >
      {size === "small" ? (
        <>
          {/* Image Rectangle */}
          <rect x="0" y="0" rx="3" ry="3" width="200" height="200" />

          {/* Title */}
          <rect x="25" y="210" rx="3" ry="3" width="150" height="18" />

          {/* Price */}
          <rect x="60" y="235" rx="3" ry="3" width="70" height="16" />

          {/* Buttons */}
          <rect x="10" y="270" rx="50" ry="50" width="35" height="35" />
          <rect x="100" y="270" rx="3" ry="3" width="90" height="30" />
        </>
      ) : (
        <>
          <rect x="0" y="0" rx="3" ry="3" width="300" height="350" />
        </>
      )}
    </ContentLoader>
  );
}
