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

      {/* Footer */}
      <Flex justifyContent="center" width="100%" padding="2rem 0">
        <MarketingFooter />
      </Flex>
    </Flex>
  </Flex>
  );
}
