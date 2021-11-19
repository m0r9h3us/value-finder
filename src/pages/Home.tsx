interface PoolProps {
  /**
   * If this component is rendererd in a parent that defines a height set this to false.
   */
  absoluteHeight?: boolean;
}

/**
 * Home is the Home Page
 */
const Home = ({ absoluteHeight = true }: PoolProps) => {
  return (
    <div className='flex flex-grow p-1'>
      <p>THIS IS HOME</p>
    </div>
  );
};

export default Home;
