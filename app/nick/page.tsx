export default function Nick() {
  return (
    <div className="w-full px-5 mt-10 space-y-4 pb-10">
      <div className="border border-slate-700 bg-slate-200 p-2 w-[300px] space-y-2">
        <p>My name is Nicholas Chen.</p>
        <p>
          You can find my main website at{" "}
          <a className="text-blue-800" href="https://nicholaschen.io">
            nicholaschen.io
          </a>
        </p>
      </div>

      <div className="ml-5 border border-slate-700 bg-slate-200 p-2 w-[300px] space-y-2">
        <p>I really like iframes.</p>
        <p>
          Instead of repeating a bunch of rote facts about myself, why not just
          embed the about page on my actual site?
        </p>
      </div>

      <div className="ml-10 border border-slate-700 bg-white p-2 w-[300px] space-y-2">
        <iframe
          src="https://nicholaschen.io/about"
          className="w-full h-[300px]"
        />
      </div>

      <div className="ml-5 border border-slate-700 bg-slate-200 p-2 w-[300px] space-y-2">
        <p>
          That&apos;s something I&apos;ve been thinking a lot about lately.
          iframes seem so underutilized. Granted, they present security problems
          sometimes and can present accessibility concerns. Still, it seems like
          there&apos;s so much low hanging fruit for the cool things you can do
          with them.
        </p>
        <p>Here&apos;s some more iframes of cool projects I&apos;ve made.</p>
      </div>
      <div className="flex w-full space-between">

        <div className="ml-10 border border-slate-700 bg-white p-2 w-[300px] space-y-2">
          <iframe src="https://synesthesia.club" className="w-full h-[300px]" />
        </div>

        <div className="ml-10 border border-slate-700 bg-white p-2 w-[300px] space-y-2">
          <iframe src="https://www.synesthesia.club/profile/0b6b5e78-406f-44f6-839b-1537e98226a7/tags" className="w-full h-[300px]" />
        </div> 


      </div>


      <div className="ml-5 border border-slate-700 bg-slate-200 p-2 w-[300px] space-y-2">
        <p>Anyways, I am interested in things other than iframes. Poke around my website if you&apos;d like to learn more.</p>
        <p>
          Here&apos;s an embed of an essay I wrote that explains the philosophy behind this site.
        </p>
      </div>
      <div className="ml-10 border border-slate-700 bg-white p-2 w-[400px] space-y-2">
          <iframe src="https://nicholaschen.io/fragments" className="w-full h-[400px]" />
        </div> 
    </div>
  );
}
