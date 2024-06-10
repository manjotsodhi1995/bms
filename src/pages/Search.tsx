import { useSearchParams } from "react-router-dom"; import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";
function SearchPage() {
    const [searchParams] = useSearchParams();

const searchKeywords = searchParams.get("query");const eventData = [
  {
    title: "Rhythms Live",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/959f/1738/c3e5a2be170a46585dd0a716826faa49?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G3KUvOyCY4RP4cBbnTFMm-VDMUX02Ld9x2SEoZmWFq7UdqEDHZrhrPHW7VHRJaZLhFlrSVZ-UbD58rEEwHmCxbIkLMmOlCYvIIDj-HAVv-nkzdTg2-x3s329NUhR9MWTNjzAWjMGbVy8EtysyQrOT9cR4RjaG~9Fl1Mq2~nAigC37HusRY43xeicGvNYQF69UsGpfGql8OkvPBoOsZDbOe061PaomqnAa7SYTQhOmyL8FI3fT6et08GL2cE5MukW~I05Iwj42pIF9GmadcSDHhmHBhM0IU3tivIOb6a2sSDniOdcplYhLrlIGy0JJdSGTXZawcLanhxAq6hAKAV3rw__",
    date: "DEC 24",
    location: "Boston",
  },
  {
    title: "Rhythms Live",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/bb90/a815/4e97da869bd386736fb25728c68cb5ca?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XT4R6e17Ky9lWrvQrYF~b3M4BZhIo0LBfQzbi5eEjDFafpfmYMcrUNVGhUBMsiKxTo77F5fmIs2pdKwJifJ9cI3ysT9mKOj1wWbzCmLjwpYvVNZvIpJFFw2VGCLD3O14m~i~ZZ4rQZu54xdBLF0TRGbMRgiOYoH3Fu8iSAoH10YxJMX5wcPZapCKqSBNe8rPl4wEBObZexrQfElkQCXTYON1qZeH2t3LUz4MNDpeou7K7fO8Y0TQKAxN7ACJRVsqMQ2JOWm4cYdDl8ud7-8WwjuOxbNGMsWA1AMYUR~dMkolqSK3u1VDbL63R1kFL-B1xdmjnkzDGPvU0IM6c8PeGA__",
    date: "DEC 24",
    location: "Boston",
  },
  {
    title: "Rhythms Live",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/e6f7/afea/18e6163a82e41b420bed6926cc768cee?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nKIE61vv1TSZEVuC61~K-o81FsIiUIvMmosh9BSE5NXPc9~JSGg-MIbzMqgmX1qt2iCQ3SNAtojcIt093yfO4z7koAmlRKfp3ObDH8BDvUtH6FvNxXTn80T9dw-kg0wo81FbSmO~FTFELXbCeBgOSeSkhYB5rRf6JzYCWiGU3eG7EOf1FGZ95nJ0yDEIb71N~FfhfbIopat5ceJYlXrXuFBei-2S3hhAPD6CyAquPS116nzreWXJCDKbINAorb1C1Q-1mRkx21dD8NGiwKWgzS8JilmKDe9CNcl~vF6QqD2piDIEsemYSbG~BjPRjioYSFJ1aq3Egb8Kotx2nrUg2w__",
    date: "DEC 24",
    location: "Boston",
  },
  {
    title: "Rhythms Live",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/7c0c/4551/03f4daaa2748f9135fb1b5adecb43fb4?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jdks-o45fCfFJEhtlanv-tr2GfoYg5fCvvo99ldLCswVWL5KYlgNd9d-3oGkfv20rArD2utwPgtnIyJjWjcMZntxC26KPSJO8nkotmKoUAUFZcWQSpVCKfMLJhnb78tWgrBDzPmcwHXIGAKOqqwiZJndx4ngUFLHF-cV4dACqHLigbkkLhlMMeaK7an6He1imioKz5xmlAsb0OXFhHDvHYG3nOrh1Pbd0FHUBn0uuWz7izi5p6Bx2WpfW8D8ow1oruzt76hoYjfqJXD0WYeqiiYcFAwmtyLmKLgkS7NlDCZy9ZpMWP3AWL3eOs7nn74nu6LKj7RnBDRr2~QOj34LNQ__",
    date: "DEC 24",
    location: "Boston",
  },
  {
    title: "Rhythms Live",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/959f/1738/c3e5a2be170a46585dd0a716826faa49?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G3KUvOyCY4RP4cBbnTFMm-VDMUX02Ld9x2SEoZmWFq7UdqEDHZrhrPHW7VHRJaZLhFlrSVZ-UbD58rEEwHmCxbIkLMmOlCYvIIDj-HAVv-nkzdTg2-x3s329NUhR9MWTNjzAWjMGbVy8EtysyQrOT9cR4RjaG~9Fl1Mq2~nAigC37HusRY43xeicGvNYQF69UsGpfGql8OkvPBoOsZDbOe061PaomqnAa7SYTQhOmyL8FI3fT6et08GL2cE5MukW~I05Iwj42pIF9GmadcSDHhmHBhM0IU3tivIOb6a2sSDniOdcplYhLrlIGy0JJdSGTXZawcLanhxAq6hAKAV3rw__",
    date: "DEC 24",
    location: "Boston",
  },
  {
    title: "Rhythms Live",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/bb90/a815/4e97da869bd386736fb25728c68cb5ca?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XT4R6e17Ky9lWrvQrYF~b3M4BZhIo0LBfQzbi5eEjDFafpfmYMcrUNVGhUBMsiKxTo77F5fmIs2pdKwJifJ9cI3ysT9mKOj1wWbzCmLjwpYvVNZvIpJFFw2VGCLD3O14m~i~ZZ4rQZu54xdBLF0TRGbMRgiOYoH3Fu8iSAoH10YxJMX5wcPZapCKqSBNe8rPl4wEBObZexrQfElkQCXTYON1qZeH2t3LUz4MNDpeou7K7fO8Y0TQKAxN7ACJRVsqMQ2JOWm4cYdDl8ud7-8WwjuOxbNGMsWA1AMYUR~dMkolqSK3u1VDbL63R1kFL-B1xdmjnkzDGPvU0IM6c8PeGA__",
    date: "DEC 24",
    location: "Boston",
  },
  {
    title: "Rhythms Live",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/e6f7/afea/18e6163a82e41b420bed6926cc768cee?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nKIE61vv1TSZEVuC61~K-o81FsIiUIvMmosh9BSE5NXPc9~JSGg-MIbzMqgmX1qt2iCQ3SNAtojcIt093yfO4z7koAmlRKfp3ObDH8BDvUtH6FvNxXTn80T9dw-kg0wo81FbSmO~FTFELXbCeBgOSeSkhYB5rRf6JzYCWiGU3eG7EOf1FGZ95nJ0yDEIb71N~FfhfbIopat5ceJYlXrXuFBei-2S3hhAPD6CyAquPS116nzreWXJCDKbINAorb1C1Q-1mRkx21dD8NGiwKWgzS8JilmKDe9CNcl~vF6QqD2piDIEsemYSbG~BjPRjioYSFJ1aq3Egb8Kotx2nrUg2w__",
    date: "DEC 24",
    location: "Boston",
  },
  {
    title: "Rhythms Live",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/7c0c/4551/03f4daaa2748f9135fb1b5adecb43fb4?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jdks-o45fCfFJEhtlanv-tr2GfoYg5fCvvo99ldLCswVWL5KYlgNd9d-3oGkfv20rArD2utwPgtnIyJjWjcMZntxC26KPSJO8nkotmKoUAUFZcWQSpVCKfMLJhnb78tWgrBDzPmcwHXIGAKOqqwiZJndx4ngUFLHF-cV4dACqHLigbkkLhlMMeaK7an6He1imioKz5xmlAsb0OXFhHDvHYG3nOrh1Pbd0FHUBn0uuWz7izi5p6Bx2WpfW8D8ow1oruzt76hoYjfqJXD0WYeqiiYcFAwmtyLmKLgkS7NlDCZy9ZpMWP3AWL3eOs7nn74nu6LKj7RnBDRr2~QOj34LNQ__",
    date: "DEC 24",
    location: "Boston",
  },
  {
    title: "Rhythms Live",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/959f/1738/c3e5a2be170a46585dd0a716826faa49?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G3KUvOyCY4RP4cBbnTFMm-VDMUX02Ld9x2SEoZmWFq7UdqEDHZrhrPHW7VHRJaZLhFlrSVZ-UbD58rEEwHmCxbIkLMmOlCYvIIDj-HAVv-nkzdTg2-x3s329NUhR9MWTNjzAWjMGbVy8EtysyQrOT9cR4RjaG~9Fl1Mq2~nAigC37HusRY43xeicGvNYQF69UsGpfGql8OkvPBoOsZDbOe061PaomqnAa7SYTQhOmyL8FI3fT6et08GL2cE5MukW~I05Iwj42pIF9GmadcSDHhmHBhM0IU3tivIOb6a2sSDniOdcplYhLrlIGy0JJdSGTXZawcLanhxAq6hAKAV3rw__",
    date: "DEC 24",
    location: "Boston",
  },
  {
    title: "Rhythms Live",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/bb90/a815/4e97da869bd386736fb25728c68cb5ca?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XT4R6e17Ky9lWrvQrYF~b3M4BZhIo0LBfQzbi5eEjDFafpfmYMcrUNVGhUBMsiKxTo77F5fmIs2pdKwJifJ9cI3ysT9mKOj1wWbzCmLjwpYvVNZvIpJFFw2VGCLD3O14m~i~ZZ4rQZu54xdBLF0TRGbMRgiOYoH3Fu8iSAoH10YxJMX5wcPZapCKqSBNe8rPl4wEBObZexrQfElkQCXTYON1qZeH2t3LUz4MNDpeou7K7fO8Y0TQKAxN7ACJRVsqMQ2JOWm4cYdDl8ud7-8WwjuOxbNGMsWA1AMYUR~dMkolqSK3u1VDbL63R1kFL-B1xdmjnkzDGPvU0IM6c8PeGA__",
    date: "DEC 24",
    location: "Boston",
  },
  {
    title: "Rhythms Live",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/e6f7/afea/18e6163a82e41b420bed6926cc768cee?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nKIE61vv1TSZEVuC61~K-o81FsIiUIvMmosh9BSE5NXPc9~JSGg-MIbzMqgmX1qt2iCQ3SNAtojcIt093yfO4z7koAmlRKfp3ObDH8BDvUtH6FvNxXTn80T9dw-kg0wo81FbSmO~FTFELXbCeBgOSeSkhYB5rRf6JzYCWiGU3eG7EOf1FGZ95nJ0yDEIb71N~FfhfbIopat5ceJYlXrXuFBei-2S3hhAPD6CyAquPS116nzreWXJCDKbINAorb1C1Q-1mRkx21dD8NGiwKWgzS8JilmKDe9CNcl~vF6QqD2piDIEsemYSbG~BjPRjioYSFJ1aq3Egb8Kotx2nrUg2w__",
    date: "DEC 24",
    location: "Boston",
  },
  {
    title: "Rhythms Live",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/7c0c/4551/03f4daaa2748f9135fb1b5adecb43fb4?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jdks-o45fCfFJEhtlanv-tr2GfoYg5fCvvo99ldLCswVWL5KYlgNd9d-3oGkfv20rArD2utwPgtnIyJjWjcMZntxC26KPSJO8nkotmKoUAUFZcWQSpVCKfMLJhnb78tWgrBDzPmcwHXIGAKOqqwiZJndx4ngUFLHF-cV4dACqHLigbkkLhlMMeaK7an6He1imioKz5xmlAsb0OXFhHDvHYG3nOrh1Pbd0FHUBn0uuWz7izi5p6Bx2WpfW8D8ow1oruzt76hoYjfqJXD0WYeqiiYcFAwmtyLmKLgkS7NlDCZy9ZpMWP3AWL3eOs7nn74nu6LKj7RnBDRr2~QOj34LNQ__",
    date: "DEC 24",
    location: "Boston",
  },
  {
    title: "Rhythms Live",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/959f/1738/c3e5a2be170a46585dd0a716826faa49?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G3KUvOyCY4RP4cBbnTFMm-VDMUX02Ld9x2SEoZmWFq7UdqEDHZrhrPHW7VHRJaZLhFlrSVZ-UbD58rEEwHmCxbIkLMmOlCYvIIDj-HAVv-nkzdTg2-x3s329NUhR9MWTNjzAWjMGbVy8EtysyQrOT9cR4RjaG~9Fl1Mq2~nAigC37HusRY43xeicGvNYQF69UsGpfGql8OkvPBoOsZDbOe061PaomqnAa7SYTQhOmyL8FI3fT6et08GL2cE5MukW~I05Iwj42pIF9GmadcSDHhmHBhM0IU3tivIOb6a2sSDniOdcplYhLrlIGy0JJdSGTXZawcLanhxAq6hAKAV3rw__",
    date: "DEC 24",
    location: "Boston",
  },
  {
    title: "Rhythms Live",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/bb90/a815/4e97da869bd386736fb25728c68cb5ca?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XT4R6e17Ky9lWrvQrYF~b3M4BZhIo0LBfQzbi5eEjDFafpfmYMcrUNVGhUBMsiKxTo77F5fmIs2pdKwJifJ9cI3ysT9mKOj1wWbzCmLjwpYvVNZvIpJFFw2VGCLD3O14m~i~ZZ4rQZu54xdBLF0TRGbMRgiOYoH3Fu8iSAoH10YxJMX5wcPZapCKqSBNe8rPl4wEBObZexrQfElkQCXTYON1qZeH2t3LUz4MNDpeou7K7fO8Y0TQKAxN7ACJRVsqMQ2JOWm4cYdDl8ud7-8WwjuOxbNGMsWA1AMYUR~dMkolqSK3u1VDbL63R1kFL-B1xdmjnkzDGPvU0IM6c8PeGA__",
    date: "DEC 24",
    location: "Boston",
  },
  {
    title: "Rhythms Live",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/e6f7/afea/18e6163a82e41b420bed6926cc768cee?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nKIE61vv1TSZEVuC61~K-o81FsIiUIvMmosh9BSE5NXPc9~JSGg-MIbzMqgmX1qt2iCQ3SNAtojcIt093yfO4z7koAmlRKfp3ObDH8BDvUtH6FvNxXTn80T9dw-kg0wo81FbSmO~FTFELXbCeBgOSeSkhYB5rRf6JzYCWiGU3eG7EOf1FGZ95nJ0yDEIb71N~FfhfbIopat5ceJYlXrXuFBei-2S3hhAPD6CyAquPS116nzreWXJCDKbINAorb1C1Q-1mRkx21dD8NGiwKWgzS8JilmKDe9CNcl~vF6QqD2piDIEsemYSbG~BjPRjioYSFJ1aq3Egb8Kotx2nrUg2w__",
    date: "DEC 24",
    location: "Boston",
  },
  {
    title: "Rhythms Live",
    description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/7c0c/4551/03f4daaa2748f9135fb1b5adecb43fb4?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jdks-o45fCfFJEhtlanv-tr2GfoYg5fCvvo99ldLCswVWL5KYlgNd9d-3oGkfv20rArD2utwPgtnIyJjWjcMZntxC26KPSJO8nkotmKoUAUFZcWQSpVCKfMLJhnb78tWgrBDzPmcwHXIGAKOqqwiZJndx4ngUFLHF-cV4dACqHLigbkkLhlMMeaK7an6He1imioKz5xmlAsb0OXFhHDvHYG3nOrh1Pbd0FHUBn0uuWz7izi5p6Bx2WpfW8D8ow1oruzt76hoYjfqJXD0WYeqiiYcFAwmtyLmKLgkS7NlDCZy9ZpMWP3AWL3eOs7nn74nu6LKj7RnBDRr2~QOj34LNQ__",
    date: "DEC 24",
    location: "Boston",
  },
];
  return (
    <div className="lg:px-[5%] xl:px-[7%] px-[8vw] min-h-[80vh]">
      <div className="font-medium flex gap-2 items-center">
        See all results for {`"${searchKeywords}"`}
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.7806 8.53061L11.0306 15.2806C10.8899 15.4213 10.699 15.5004 10.5 15.5004C10.301 15.5004 10.1101 15.4213 9.96937 15.2806C9.82864 15.1399 9.74958 14.949 9.74958 14.75C9.74958 14.551 9.82864 14.3601 9.96937 14.2194L15.4397 8.74999H0.75C0.551088 8.74999 0.360322 8.67097 0.21967 8.53032C0.0790178 8.38967 0 8.1989 0 7.99999C0 7.80108 0.0790178 7.61031 0.21967 7.46966C0.360322 7.32901 0.551088 7.24999 0.75 7.24999H15.4397L9.96937 1.78061C9.82864 1.63988 9.74958 1.44901 9.74958 1.24999C9.74958 1.05097 9.82864 0.860095 9.96937 0.719365C10.1101 0.578634 10.301 0.499573 10.5 0.499573C10.699 0.499573 10.8899 0.578634 11.0306 0.719365L17.7806 7.46936C17.8504 7.53902 17.9057 7.62174 17.9434 7.71278C17.9812 7.80383 18.0006 7.90143 18.0006 7.99999C18.0006 8.09855 17.9812 8.19615 17.9434 8.2872C17.9057 8.37824 17.8504 8.46096 17.7806 8.53061Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-4 pb-10">
        <div className="flex justify-between mt-4">
          <div className="font-medium lg:text-[1.4rem] text-[0.9rem]">
            Events
          </div>
        </div>
        <div className="justify-center w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          {eventData.map((card, index) => (
            <EventCard key={index} {...card}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
