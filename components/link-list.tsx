interface LinkItem {
  title: string;
  url: string;
  date: string; // format: dd.mm.yyyy
}

interface LinkListProps {
  links: LinkItem[];
}

function parseDate(date: string): Date {
  const [day, month, year] = date.split(".").map(Number);
  return new Date(year, month - 1, day);
}

export default function LinkList({ links }: LinkListProps) {
  return (
    <ul>
      {links.map((link) => {
        const parsedDate = parseDate(link.date);
        return (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="flex justify-between text-lg hover:opacity-60">
              <span>{link.title}</span>

              <span>
                {" "}
                {parsedDate.toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>
            </li>
          </a>
        );
      })}
    </ul>
  );
}
