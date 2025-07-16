type IconPropsType = {
  width?: string;
  height?: string;
  color?: string;
};

const Support = ({
  width = "1rem",
  height = width,
  color = "black",
}: IconPropsType) => {
  return (
    <svg height={height} viewBox="0 0 52 52" width={width}>
      <rect fill="none" height={height} width={width} />
      <path
        d="M44,20c0-1.104-0.896-2-2-2s-2,0.896-2,2  c0,0.476,0,14.524,0,15c0,1.104,0.896,2,2,2s2-0.896,2-2C44,34.524,44,20.476,44,20z"
        fill="none"
        stroke="#000000"
        stroke-miterlimit="10"
        stroke-width="2.5"
      />
      <path
        d="M28,47c1.104,0,2-0.896,2-2s-0.896-2-2-2  c-0.476,0-4.524,0-5,0c-1.104,0-2,0.896-2,2s0.896,2,2,2C23.476,47,27.524,47,28,47z"
        fill="none"
        stroke="#000000"
        stroke-miterlimit="10"
        stroke-width="2.5"
      />
      <path
        d="M8,19C8,9.611,15.611,2,25,2s17,7.611,17,17"
        fill="none"
        stroke="#000000"
        stroke-miterlimit="10"
        stroke-width="2.5"
      />
      <path
        d="M44,20c2.762,0,5,3.357,5,7.5  c0,4.141-2.238,7.5-5,7.5"
        fill="none"
        stroke="#000000"
        stroke-miterlimit="10"
        stroke-width="2.5"
      />
      <path
        d="M6,20c0-1.104,0.896-2,2-2s2,0.896,2,2  c0,0.476,0,14.524,0,15c0,1.104-0.896,2-2,2s-2-0.896-2-2C6,34.524,6,20.476,6,20z"
        fill="none"
        stroke="#000000"
        stroke-miterlimit="10"
        stroke-width="2.5"
      />
      <path
        d="M6,20c-2.761,0-5,3.357-5,7.5  C1,31.641,3.239,35,6,35"
        fill="none"
        stroke="#000000"
        stroke-miterlimit="10"
        stroke-width="2.5"
      />
      <path
        d="M42,37c0,5-3,8-8,8h-4"
        fill="none"
        stroke="#000000"
        stroke-miterlimit="10"
        stroke-width="2.5"
      />
    </svg>
  );
};

export default Support;
