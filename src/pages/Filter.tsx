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
    <div className="lg:pr-[2.5%] xl:pr-[3.5%] sm:pr-[4vw] min-h-[80vh] flex justify-between flex-col sm:flex-row">
      <div className="lg:w-[25vw] sm:w-[35vw] w-[70vw]  min-h-[80vh] backdrop-blur-md bg-white/50 flex flex-col mt-[10px] pt-[40px] rounded-tr-xl rounded-br-xl border-gray-400 border h-fit min-w-max">
        {" "}
        {/* Fixed positioning and overflow */}
        <div className="border-gray-400 border-b mb-[30px] pl-[30px]">
        <h2 className="text-lg font-medium mt-[10px] mb-[20px]">Filter By:</h2>
        </div>
        <div className="border-gray-600 border-b mb-[50px] pl-[30px]">
        <h3 className="font-medium mb-[20px]">Day</h3>
        <div className="flex justify-between w-[200px]">
        <div className="flex">
          <input type="checkbox" name="" id="" className="mr-[10px] w-[17px] border-black"/>
          <h2>Today</h2>
        </div>
        <h2 className="text-gray-600">32</h2>
        </div>
        <div className="flex justify-between w-[200px]">
        <div className="flex">
          <input type="checkbox" name="" id="" className="mr-[10px] w-[17px] border-black"/>
          <h2>Tommorow</h2>
        </div>
        <h2 className="text-gray-600">32</h2>
        </div>
        <div className="flex justify-between w-[200px]">
        <div className="flex">
          <input type="checkbox" name="" id="" className="mr-[10px] w-[17px] border-black"/>
          <h2>This Week</h2>
        </div>
        <h2 className="text-gray-600">32</h2>
        </div>
        <div className="flex justify-between w-[200px]">
        <div className="flex mb-[20px]">
          <input type="checkbox" name="" id="" className="mr-[10px] w-[17px] border-black"/>
          <h2>This Month</h2>
        </div>
        <h2 className="text-gray-600">32</h2>
        </div>
        </div>
        <div className="border-gray-600 border-b mb-[50px] pl-[30px]">
        <h3 className="font-medium mb-[20px]">Pricing</h3>
        <div className="flex justify-between w-[200px]">
        <div className="flex">
          <input type="checkbox" name="" id="" className="mr-[10px] w-[17px] border-black"/>
          <h2>Free</h2>
        </div>
        <h2 className="text-gray-600">32</h2>
        </div>
        <div className="flex justify-between w-[200px]">
        <div className="flex mb-[20px]">
          <input type="checkbox" name="" id="" className="mr-[10px] w-[17px] border-black"/>
          <h2>Paid</h2>
        </div>
        <h2 className="text-gray-600">32</h2>
        </div>
        </div>
        <div className="border-gray-600 border-b mb-[50px] pl-[30px]">
        <h3 className="font-medium mb-[20px]">Categories</h3>
        <div className="flex justify-between w-[200px]">
        <div className="flex">
          <input type="checkbox" name="" id="" className="mr-[10px] w-[17px] border-black"/>
          <h2>Music</h2>
        </div>
        <h2 className="text-gray-600">32</h2>
        </div>
        <div className="flex justify-between w-[200px]">
        <div className="flex">
          <input type="checkbox" name="" id="" className="mr-[10px] w-[17px] border-black"/>
          <h2>Comedy</h2>
        </div>
        <h2 className="text-gray-600">32</h2>
        </div>
        <div className="flex justify-between w-[200px]">
        <div className="flex">
          <input type="checkbox" name="" id="" className="mr-[10px] w-[17px] border-black"/>
          <h2>Sports</h2>
        </div>
        <h2 className="text-gray-600">32</h2>
        </div>
        <div className="flex justify-between w-[200px]">
        <div className="flex">
          <input type="checkbox" name="" id="" className="mr-[10px] w-[17px] border-black"/>
          <h2>Food & Drinks</h2>
        </div>
        <h2 className="text-gray-600">32</h2>
        </div>
        <div className="flex justify-between w-[200px]">
        <div className="flex">
          <input type="checkbox" name="" id="" className="mr-[10px] w-[17px] border-black"/>
          <h2>Theater</h2>
        </div>
        <h2 className="text-gray-600">32</h2>
        </div>
        <div className="flex justify-between w-[200px]">
        <div className="flex">
          <input type="checkbox" name="" id="" className="mr-[10px] w-[17px] border-black"/>
          <h2>Dance</h2>
        </div>
        <h2 className="text-gray-600">32</h2>
        </div>
        <div className="flex justify-between w-[200px]">
        <div className="flex">
          <input type="checkbox" name="" id="" className="mr-[10px] w-[17px] border-black"/>
          <h2>Art</h2>
        </div>
        <h2 className="text-gray-600">32</h2>
        </div>
        <div className="flex justify-between w-[200px]">
        <div className="flex mb-[20px]">
          <input type="checkbox" name="" id="" className="mr-[10px] w-[17px] border-black"/>
          <h2>Other</h2>
        </div>
        <h2 className="text-gray-600">32</h2>
        </div>
        </div>
        <div className="mb-[100px] pl-[30px]">
        <h3 className="font-medium mb-[20px]">Near By Cities</h3>
        <div className="flex justify-between w-[200px]">
        <div className="flex">
          <input type="checkbox" name="" id="" className="mr-[10px] w-[17px] border-black"/>
          <h2>Ahmedabad</h2>
        </div>
        <h2 className="text-gray-600">32</h2>
        </div>
        <div className="flex justify-between w-[200px]">
        <div className="flex">
          <input type="checkbox" name="" id="" className="mr-[10px] w-[17px] border-black"/>
          <h2>Gandhinagar</h2>
        </div>
        <h2 className="text-gray-600">32</h2>
        </div>
        <div className="flex justify-between w-[200px]">
        <div className="flex">
          <input type="checkbox" name="" id="" className="mr-[10px] w-[17px] border-black"/>
          <h2>Surat</h2>
        </div>
        <h2 className="text-gray-600">32</h2>
        </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 pb-10 lg:w-[75vw] w-[60vw]">
        {" "}
        {/* Adjusted margin-left */}
        <div className="flex w-screen justify-center mt-4 sm:justify-normal">
          <div className="font-medium lg:text-[1.4rem] text-[0.9rem] sm:ml-[50px]">
            Events
          </div>
        </div>
        <div className="justify-center sm:w-full w-screen grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
          {eventData.map((card, index) => (
            <EventCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter