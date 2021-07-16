import Router from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useStateContext } from "../components/HBOProvider";
import Login from "../components/UI/Login/login";
import MainLayout from "../components/Layouts/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../components/UI/MediaRow/MediaRow";
import AuthCheck from "../components/AuthCheck";

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();

  useEffect(() => {}, []);
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow
        title="Most Popular Movies"
        type="large-v"
        endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2021"
      />
      <MediaRow
        title="Action"
        type="large-v"
        endpoint="discover/movie?with_genres=28&primary_release_year=2021"
      />
      <MediaRow
        title="Series"
        type="small-v"
        endpoint="discover/tv?primary_release_year=2021"
      />
      <MediaRow
        title="Crime"
        type="small-v"
        endpoint="discover/movie?with_genres=80&primary_release_year=2021"
      />
      <MediaRow
        title="Horror"
        type="large-v"
        endpoint="discover/movie?with_genres=27&primary_release_year=2021"
      />
      <MediaRow
        title="Sci-fi"
        type="small-v"
        endpoint="discover/movie?with_genres=878&primary_release_year=2021"
      />
       <MediaRow
        title="Drama"
        type="small-v"
        endpoint="discover/movie?with_genres=18&primary_release_year=2021"
      />
       <MediaRow
        title="Family"
        type="small-v"
        endpoint="discover/movie?with_genres=10751&primary_release_year=2021"
      />
    </MainLayout>
  );
}
