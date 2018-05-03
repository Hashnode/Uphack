import Link from 'next/link'
import Nav from '../components/nav'

export default () => (
  <div>
    <Nav />
    <div class="post-list">
        <div class="container">
            <div class="ask-wrapper">
                <div class="single-field d-flex flex-row align-items-center">
                    <div class="label">
                        title
                    </div>
                    <div class="input-wrapper">
                        <input type="text"/>
                    </div>
                </div>
                <div class="single-field d-flex flex-row align-items-center">
                    <div class="label">
                        url
                    </div>
                    <div class="input-wrapper">
                        <input type="text"/>
                    </div>
                </div>
                <div class="separator">or</div>
                <div class="single-field d-flex flex-row align-items-center">
                    <div class="label">
                        text
                    </div>
                    <div class="input-wrapper">
                        <textarea ></textarea>
                    </div>
                </div>
                <div class="submit-wrapper">
                    <button class="btn btn-primary">Submit</button>
                </div>
                <div class="side-note">
                    <p>Leave url blank to submit a question for discussion. If there is no url, the text (if any) will appear at the top of the thread.</p>
                </div>
            </div>
        </div>
    </div>
  </div>
)
