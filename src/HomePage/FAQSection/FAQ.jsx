import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import '../../All styles/FAQ.css'

function FAQ() {
  return (
    <>
      <div className="AccordinSection mt-5">
        <div className="HeadingSection">
          <div>FAQ</div>
        </div>

        <div className="Accordin_container">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item BorderStyle">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  1. How do i make an appointment?
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body textBody">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente eos voluptatibus deserunt iure eaque! Minus, beatae facilis. Nulla modi minus recusandae quidem asperiores eligendi distinctio voluptas quae fugit, aliquid maxime aspernatur id unde neque aperiam beatae, ea non perspiciatis numquam.</div>
              </div>
            </div>
            <div class="accordion-item BorderStyle">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  2. What is Care24's in-home nursing service?
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body textBody">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus suscipit error sapiente, iste ipsam nisi alias reprehenderit ducimus fugit, eaque repudiandae accusamus quasi? Soluta aliquam ad assumenda quam possimus corporis. Officia aperiam illo, accusantium aut quidem quos ad ea commodi.</div>
              </div>
            </div>
            <div class="accordion-item BorderStyle">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  3. Why choose Care24?
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body textBody">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium iure molestias aliquid officia libero voluptates corrupti quo? Fugit doloribus nihil sint sequi mollitia, fugiat neque quisquam voluptate odio sunt ab iure culpa saepe odit iste quis doloremque nisi quasi.</div>
              </div>
            </div>
            <div class="accordion-item BorderStyle">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  4. Who are Care24's attendants?
                </button>
              </h2>
              <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body textBody">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur reiciendis, veritatis officia quia non dolorum ipsum quos blanditiis maiores ducimus unde fugiat dignissimos architecto facilis doloremque, tenetur molestiae. Similique aliquid itaque aliquam numquam quod error, excepturi libero? Rem, quasi sint!</div>
              </div>
            </div>

          </div>
        </div>


      </div>
    </>
  )
}

export default FAQ
