import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const filmDirectory = path.join(process.cwd(), 'films');

export function getSortedFilmData() {
  // Get file names under /films
  const fileNames = fs.readdirSync(filmDirectory);
  const allFilmData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(filmDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the film metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort films by date
  return allFilmData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllFilmIds() {
  const fileNames = fs.readdirSync(filmDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'film-one'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'film-two'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getFilmData(id) {
  const fullPath = path.join(filmDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the film metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    ...matterResult.data,
  };
}