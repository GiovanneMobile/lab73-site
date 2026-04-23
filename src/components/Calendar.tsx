import React from 'react';

const Calendar: React.FC = () => {
  return (
    <div className="aspect-square md:aspect-video w-full min-h-[500px] md:min-h-[600px]">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FBahia&showPrint=0&showTabs=0&showTitle=0&mode=WEEK&src=ZXN0dWRpby5sYWI3M0BnbWFpbC5jb20&src=Y2NlMTM3ZmVmMjIxMWUzODhmYzBjYWVlOTQ2MThlYjM4ODMxZjE5MjFmOGQ2MTNmMDA5NjNiYzQ2MTk2OTlhMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23ef6c00&color=%23ad1457"
        style={{ border: 0, width: '100%', height: '100%' }}
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
        className="rounded-xl"
      ></iframe>
    </div>
  );
};

export default Calendar;
