import { useState } from 'react';
import './App.css';

import Modal from './lib/Modal';
import styled from '@emotion/styled';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const CustomBackDrop = styled(Modal.BackDrop)`
    background-color: rgba(0, 0, 255, 0.35);
  `;

  return (
    <div>
      {isOpen && (
        <Modal onClose={handleButtonToggle}>
          <CustomBackDrop />
          <Modal.Content position="bottom" style={{ width: '300px', height: '300px', backgroundColor: 'white' }}>
            <Modal.Title>하이</Modal.Title>
            <Modal.CloseButton style={{ position: 'absolute', right: '24px', top: '24px' }}>
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.8167 1.41L13.4067 0L7.81665 5.59L2.22665 0L0.81665 1.41L6.40665 7L0.81665 12.59L2.22665 14L7.81665 8.41L13.4067 14L14.8167 12.59L9.22665 7L14.8167 1.41Z"
                  fill="black"
                />
              </svg>
            </Modal.CloseButton>
          </Modal.Content>
        </Modal>
      )}

      <div>
        Please stop me if you’ve heard this one before. You open a modal, scroll through it, close it, and wind up somewhere else on the page than you were when
        you opened the modal. That’s because modals are elements on a page just like any other. It may stay in place (assuming that’s what it’s meant to do) but
        the rest of page continues to behave as normal. Sometimes this is a non-issue, like screens that are the exact height of the viewport. Anything else,
        though, we’re looking at Scroll City. The good news is that we can prevent that with a sprinkle of CSS (and JavaScript) trickery. Let’s start with
        something simple We can make a huge dent to open-modal-page-scrolling™ by setting the height of the entire body to the full height of the viewport and
        hiding vertical overflow when the modal is open: That’s good and all, but if we’ve scrolled through the element before opening the modal, we get a
        little horizontal reflow. The width of the viewport is expanded about 15 pixels more, which is exactly the with of the scroll bar. Let’s adjust the
        right padding of the body a bit to avoid that. Note that the modal needs to be shorter than the height of the viewport to make this work. Otherwise, the
        scroll bar on the body will be necessary. Great, now what about mobile? This solution works pretty great on desktop as well as Android Mobile. That
        said, Safari for iOS needs a little more love because the body still scrolls when a modal is open when tapping and moving about the touchscreen. We can
        set the body to a fixed position as a workaround: Works now! The body will not respond when the screen is touched. However, there’s still a “small”
        problem here. Let’s say the modal trigger is lower down the page and we click to open it up. Great! But now we’re automatically scrolled back up to the
        top of the screen, which is just as disorientating as the scrolling behavior we’re trying to resolve. Boo! That’s why we’ve gotta turn to JavaScript We
        can use JavaScript to avoid the touch event bubble. We all know there should be a backdrop layer when a modal is open. Unfortunately, stopPropagation is
        a little awkward with touch in iOS. But preventDefault works well. That means we have to add event listeners in every DOM node contained in the modal —
        not just on the backdrop or the modal box layer. The good news is, many JavaScript libraries can do this, including good ol’ jQuery. Oh, and one more
        thing: What if we need scrolling inside the modal? We still have to trigger a response for a touch event, but when reaching the top or bottom of the
        modal, we still need to prevent bubbling. Seems very complex, so we’re not totally out of the woods here. Let’s enhance the fixed body approach This is
        what we were working with: If we know the top of the scroll location and add it to our CSS, then the body will not scroll back to the top of the screen,
        so problem solved. We can use JavaScript for this by calculating the scroll top, and add that value to the body styles: // When the modal is shown, we
        want a fixed body document.body.style.position = 'fixed'; document.body.style.top = `-$
        {window.scrollY}px`; // When the modal is hidden, we want to remain at the top of the scroll position document.body.style.position = '';
        document.body.style.top = ''; This works, but there’s still a little leakage here after the modal is closed. Specifically, it appears that the page
        already loses its scroll position when the modal is open and the body set to be fixed. So we have to retrieve the location. Let’s modify our JavaScript
        to account for that. // When the modal is hidden... const scrollY = document.body.style.top; document.body.style.position = ''; document.body.style.top
        = ''; window.scrollTo(0, parseInt(scrollY || '0') * -1); That does it! The body no longer scrolls when a modal is open and the scroll location is
        maintained both when the modal Please stop me if you’ve heard this one before. You open a modal, scroll through it, close it, and wind up somewhere else
        on the page than you were when you opened the modal. That’s because modals are elements on a page just like any other. It may stay in place (assuming
        that’s what it’s meant to do) but the rest of page continues to behave as normal. Sometimes this is a non-issue, like screens that are the exact height
        of the viewport. Anything else, though, we’re looking at Scroll City. The good news is that we can prevent that with a sprinkle of CSS (and JavaScript)
        trickery. Let’s start with something simple We can make a huge dent to open-modal-page-scrolling™ by setting the height of the entire body to the full
        height of the viewport and hiding vertical overflow when the modal is open: That’s good and all, but if we’ve scrolled through the element before
        opening the modal, we get a little horizontal reflow. The width of the viewport is expanded about 15 pixels more, which is exactly the with of the
        scroll bar. Let’s adjust the right padding of the body a bit to avoid that. Note that the modal needs to be shorter than the height of the viewport to
        make this work. Otherwise, the scroll bar on the body will be necessary. Great, now what about mobile? This solution works pretty great on desktop as
        well as Android Mobile. That said, Safari for iOS needs a little more love because the body still scrolls when a modal is open when tapping and moving
        about the touchscreen. We can set the body to a fixed position as a workaround: Works now! The body will not respond when the screen is touched.
        However, there’s still a “small” problem here. Let’s say the modal trigger is lower down the page and we click to open it up. Great! But now we’re
        automatically scrolled back up to the top of the screen, which is just as disorientating as the scrolling behavior we’re trying to resolve. Boo! That’s
        why we’ve gotta turn to JavaScript We can use JavaScript to avoid the touch event bubble. We all know there should be a backdrop layer when a modal is
        open. Unfortunately, stopPropagation is a little awkward with touch in iOS. But preventDefault works well. That means we have to add event listeners in
        every DOM node contained in the modal — not just on the backdrop or the modal box layer. The good news is, many JavaScript libraries can do this,
        including good ol’ jQuery. Oh, and one more thing: What if we need scrolling inside the modal? We still have to trigger a response for a touch event,
        but when reaching the top or bottom of the modal, we still need to prevent bubbling. Seems very complex, so we’re not totally out of the woods here.
        Let’s enhance the fixed body approach This is what we were working with: If we know the top of the scroll location and add it to our CSS, then the body
        will not scroll back to the top of the screen, so problem solved. We can use JavaScript for this by calculating the scroll top, and add that value to
        the body styles: // When the modal is shown, we want a fixed body document.body.style.position = 'fixed'; document.body.style.top = `-${window.scrollY}
        px`; // When the modal is hidden, we want to remain at the top of the scroll position document.body.style.position = ''; document.body.style.top = '';
        This works, but there’s still a little leakage here after the modal is closed. Specifically, it appears that the page already loses its scroll position
        when the modal is open and the body set to be fixed. So we have to retrieve the location. Let’s modify our JavaScript to account for that. // When the
        modal is hidden... const scrollY = document.body.style.top; document.body.style.position = ''; document.body.style.top = ''; window.scrollTo(0,
        parseInt(scrollY || '0') * -1); That does it! The body no longer scrolls when a modal is open and the
      </div>

      <button onClick={handleButtonToggle}>모달 열기</button>
      <div>
        scroll location is maintained both when the modal i Please stop me if you’ve heard this one before. You open a modal, scroll through it, close it, and
        wind up somewhere else on the page than you were when you opened the modal. That’s because modals are elements on a page just like any other. It may
        stay in place (assuming that’s what it’s meant to do) but the rest of page continues to behave as normal. Sometimes this is a non-issue, like screens
        that are the exact height of the viewport. Anything else, though, we’re looking at Scroll City. The good news is that we can prevent that with a
        sprinkle of CSS (and JavaScript) trickery. Let’s start with something simple We can make a huge dent to open-modal-page-scrolling™ by setting the height
        of the entire body to the full height of the viewport and hiding vertical overflow when the modal is open: That’s good and all, but if we’ve scrolled
        through the element before opening the modal, we get a little horizontal reflow. The width of the viewport is expanded about 15 pixels more, which is
        exactly the with of the scroll bar. Let’s adjust the right padding of the body a bit to avoid that. Note that the modal needs to be shorter than the
        height of the viewport to make this work. Otherwise, the scroll bar on the body will be necessary. Great, now what about mobile? This solution works
        pretty great on desktop as well as Android Mobile. That said, Safari for iOS needs a little more love because the body still scrolls when a modal is
        open when tapping and moving about the touchscreen. We can set the body to a fixed position as a workaround: Works now! The body will not respond when
        the screen is touched. However, there’s still a “small” problem here. Let’s say the modal trigger is lower down the page and we click to open it up.
        Great! But now we’re automatically scrolled back up to the top of the screen, which is just as disorientating as the scrolling behavior we’re trying to
        resolve. Boo! That’s why we’ve gotta turn to JavaScript We can use JavaScript to avoid the touch event bubble. We all know there should be a backdrop
        layer when a modal is open. Unfortunately, stopPropagation is a little awkward with touch in iOS. But preventDefault works well. That means we have to
        add event listeners in every DOM node contained in the modal — not just on the backdrop or the modal box layer. The good news is, many JavaScript
        libraries can do this, including good ol’ jQuery. Oh, and one more thing: What if we need scrolling inside the modal? We still have to trigger a
        response for a touch event, but when reaching the top or bottom of the modal, we still need to prevent bubbling. Seems very complex, so we’re not
        totally out of the woods here. Let’s enhance the fixed body approach This is what we were working with: If we know the top of the scroll location and
        add it to our CSS, then the body will not scroll back to the top of the screen, so problem solved. We can use JavaScript for this by calculating the
        scroll top, and add that value to the body styles: // When the modal is shown, we want a fixed body document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`; // When the modal is hidden, we want to remain at the top of the scroll position
        document.body.style.position = ''; document.body.style.top = ''; This works, but there’s still a little leakage here after the modal is closed.
        Specifically, it appears that the page already loses its scroll position when the modal is open and the body set to be fixed. So we have to retrieve the
        location. Let’s modify our JavaScript to account for that. // When the modal is hidden... const scrollY = document.body.style.top;
        document.body.style.position = ''; document.body.style.top = ''; window.scrollTo(0, parseInt(scrollY || '0') * -1); That does it! The body no longer
        scrolls when a modal is open and the scroll location is maintained both when the modal iis open and when it is closed. Huzzah!
      </div>
    </div>
  );
}

export default App;
