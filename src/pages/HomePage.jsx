/*eslint-disable no-unused-vars */
import Hero from '../components/Hero'; // Import the Hero component
import HomeCards from '../components/HomeCards'; // Import the HomeCards component
import JobLisitings from '../components/JobListings'; // Import the JobLisitings component
import ViewAllJobs from '../components/ViewAllJobs'; // Import the ViewAllJobs component

const HomePage = () => {
  return (
    <>
      <Hero title="React Jobs" subtitle="Find your dream job in React" />
      <HomeCards />
      <JobLisitings isHome= {true} />
      <ViewAllJobs />
    </>
  )
}

export default HomePage;