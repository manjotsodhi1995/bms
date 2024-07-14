import ExpandableBox from "./Expandable";

const FAQsSection = () => {
  return (
    <div className="pl-[5vw] pt-[5vh] w-full flex flex-col items-center pb-20 gap-8">
      <div className="title font-semibold text-2xl md:text-5xl">FAQs</div>
      <div className="w-[90%] flex flex-col gap-3 py-8">
        <ExpandableBox
          title="Is there a fee for using Kafsco?"
          content="lorem ipsum cbajcsaacba asicbascb ascjbascas scbascasc scbajcbas cebf csibcd mvub dvvevbje sdev mejvb ejvbsv bv  ssevube v"
        />
        <ExpandableBox
          title="Can I customize my event page?"
          content="Yes, you can personalize your event page with images, descriptions, branding elements, and more to make it stand out and attract attendees."
        />
        <ExpandableBox
          title="How do I manage ticket sales?"
          content="lorem ipsum cbajcsaacba asicbascb ascjbascas scbascasc scbajcbas cebf csibcd mvub dvvevbje sdev mejvb ejvbsv bv  ssevube v"
        />
        <ExpandableBox
          title="How can I promote my event on Kafsco?"
          content="Utilize Kafsco’s integrated marketing tools, including in-built event stories, social media integration, and our affiliate program, to promote your event and reach a wider audience."
        />
        <ExpandableBox
          title="What is the affiliate program?"
          content="lorem ipsum cbajcsaacba asicbascb ascjbascas scbascasc scbajcbas cebf csibcd mvub dvvevbje sdev mejvb ejvbsv bv  ssevube v"
        />
        <ExpandableBox
          title="Can I communicate with my attendees through Kafsco?"
          content="lorem ipsum cbajcsaacba asicbascb ascjbascas scbascasc scbajcbas cebf csibcd mvub dvvevbje sdev mejvb ejvbsv bv  ssevube v"
        />
      </div>
    </div>
  );
};

export default FAQsSection;
