import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { Box, Image } from "@chakra-ui/react";
import useGetUserProfileByID from "../../hooks/useGetUserProfileByID";

const FeedPost = ({ post }) => {
  const { userProfile } = useGetUserProfileByID(post.createdBy);

  return (
    <>
      <PostHeader post={post} creatorProfile={userProfile} />
      <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Image src={post.imageURL} alt={"Feed Post img"} />
      </Box>
      <PostFooter
        post={post}
        creatorProfile={userProfile}
        isProfilePage={false}
      />
    </>
  );
};

export default FeedPost;
