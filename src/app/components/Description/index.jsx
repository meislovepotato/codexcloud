"use client";

import { Container, Text, TypographyBox } from "./styles";

const Description = () => {
  return (
    <Container>
      <TypographyBox variant="h4">Welcome to CodexCloud</TypographyBox>
      <Text>
        CodexCloud is an innovative platform designed for book lovers and avid
        readers to share their passion for literature. Whether you're diving
        into a timeless classic or discovering the latest bestseller, CodexCloud
        provides a space for you to connect, reflect, and engage with a vibrant
        community.
      </Text>
      <Text>
        At CodexCloud, users can easily log in and post about any book, whether
        it's available online or offline. Share your thoughts and insights by
        writing detailed reviews that help others make informed reading choices.
        You can even include links to the books you're discussing, making it
        easier for fellow readers to find and explore them.
      </Text>
      <Text>
        But that's not all—CodexCloud is also a social hub where readers can
        interact with one another. Like and comment on posts, engage in
        meaningful discussions, and discover new perspectives on literature.
        With our platform, you'll find a wealth of recommendations tailored to
        your interests, whether you're seeking books in a specific genre or
        looking to explore different themes and stories.
      </Text>
      <Text>
        Join us at CodexCloud and be part of a growing community that celebrates
        the written word. Together, let's explore the world of books, share our
        stories, and inspire one another to read more!
      </Text>
    </Container>
  );
};

export default Description;
