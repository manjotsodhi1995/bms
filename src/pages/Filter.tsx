import EventCard from "../components/EventCard";
function Filter() {const eventData = [
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
    <div className="lg:px-[5%] xl:px-[7%] px-[8vw] min-h-[80vh] flex">
      <div className="w-[25vw] min-h-[80vh]">
        {" "}
        {/* Fixed positioning and overflow */}
        Filters
      </div>
      <div className="flex flex-col gap-2 pb-10 w-[75vw]">
        {" "}
        {/* Adjusted margin-left */}
        <div className="flex justify-between mt-4">
          <div className="font-medium lg:text-[1.4rem] text-[0.9rem]">
            Events
          </div>
        </div>
        <div className="justify-center w-full grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4">
          {eventData.map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter