/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Flex,
  Heading,
  TextField,
  Button,
} from "@aws-amplify/ui-react";
import NavBarSide from "./NavBarSide";
import ProfileCard from "./ProfileCard";
import MarketingFooter from "./MarketingFooter";
import { DataStore } from "@aws-amplify/datastore";
import { JobPosts } from "../models"; // ✅ make sure this path is correct
import { useEffect, useState } from "react";

export default function JobBoard(props) {
  const { overrides, ...rest } = props;

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobData = await DataStore.query(JobPosts);
        setJobs(jobData);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };

    fetchJobs();

    const subscription = DataStore.observe(JobPosts).subscribe(() => fetchJobs());
    return () => subscription.unsubscribe();
  }, []);

  // 🔍 Filter based on search query
  const filteredJobs = jobs.filter((job) =>
    job.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 🧮 Pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handleNext = () => {
    if (indexOfLastJob < filteredJobs.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <Flex
      direction="column"
      width="100%"
      minHeight="100vh"
      backgroundColor="#ffffff"
      {...getOverrideProps(overrides, "JobBoard")}
      {...rest}
    >
      {/* Main Row: Sidebar + Content */}
      <Flex direction="row" flex="1" overflow="hidden">
        {/* Sidebar */}
        <Flex
          direction="column"
          width="240px"
          minWidth="200px"
          padding="2rem 1rem"
          backgroundColor="#ffffff"
          borderRight="1px solid #ddd"
        >
          <NavBarSide />
        </Flex>

        {/* Main Content */}
        <Flex
          direction="column"
          flex="1"
          gap="1.5rem"
          padding="2rem"
          overflow="auto"
          backgroundColor="#ffffff"
          borderRadius="16px"
          boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
          margin="2rem"
        >
          {/* Heading */}
          <Heading level={3}>Job Board</Heading>

          {/* Search Bar */}
          <TextField
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Card Grid */}
          <Flex direction="row" flexWrap="wrap" gap="2rem" justifyContent="flex-start">
            {currentJobs.map((job) => (
              <ProfileCard
                key={job.id}
                width="calc(50% - 1rem)"
                height="300px"
                title={job.title}
                description={job.description}
                image={job.image} // make sure this field exists in your model
              />
            ))}
          </Flex>

          {/* Pagination Controls */}
          <Flex justifyContent="center" gap="1rem" marginTop="2rem">
            <Button onClick={handlePrev} isDisabled={currentPage === 1}>
              Previous
            </Button>
            <Button
              onClick={handleNext}
              isDisabled={indexOfLastJob >= filteredJobs.length}
            >
              Next
            </Button>
          </Flex>
        </Flex>
      </Flex>

      {/* Footer */}
      <Flex justifyContent="center" width="100%" padding="2rem 0">
        <MarketingFooter />
      </Flex>
    </Flex>
  );
}
