import { component$ } from "@builder.io/qwik";
import Logo from "../assets/logo.png";
import En from "../assets/usa.png";
import Is from "../assets/israel.png";
import CartIcon from "../assets/cart-black.png";
import BgBanner from "../assets/homePageAzGarden01.jpg";
import Prod from "../assets/img4.png";

export const Home = component$(() => {
  return (
    <main>
      <div class="container mx-auto p-4 space-y-8">
        {/* Header */}
        <div class="flex flex-row justify-between items-center">
          {true ? (
            <img src={En} alt="En" class="w-6 hover:cursor-pointer" />
          ) : (
            <img src={Is} alt="Is" class="w-6 hover:cursor-pointer" />
          )}
          <img src={Logo} class="h-14" alt="Is" />
          <img src={CartIcon} class="w-6 hover:cursor-pointer" alt="Is" />
        </div>

        {/* Banner */}
        <div class="w-full h-80 overflow-hidden relative rounded-lg">
          <img src={BgBanner} alt="Banner" class="object-cover" />
          <div class="text-white z-10 absolute top-1/3 w-full">
            <h1 class="capitalize text-center font-bold text-4xl">AZ Garden</h1>
            <h1 class="capitalize text-center text-2xl mx-6 ">The Urban Jungle</h1>
          </div>
        </div>

        {/* Main Tite */}
        <div class="space-y-2">
          <h1 class="capitalize text-center font-bold text-2xl">fast flower delivery</h1>
          <h1 class="capitalize text-center text-sm text-gray-400 mx-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
        </div>

        {/* Products */}
        <div class="grid grid-cols-2 gap-x-3 gap-y-5">
          {[...Array(4)].map((el) => (
            <div class="space-y-6">
              <div class="relative">
                <div class="card h-52">
                  <img src={Prod} class="object-contain w-full" alt="prod" />
                </div>
                <div class="price flex text-white font-semibold flex-row relative justify-center items-center">
                  <h6 class="absolute left-1 top-3 text-xs">₪</h6>
                  <h3 class="mx-auto">280</h3>
                </div>
              </div>
              <div>
                <h1 class="capitalize text-center font-bold text-2xl">Lorem ipsum</h1>
                <h2 class="capitalize text-center text-lg mx-6">Seasonal Blooms</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Tite */}
        <div class="space-y-2">
          <h1 class="capitalize font-bold text-2xl">fast flower delivery</h1>
          <h1 class="capitalize text-sm text-gray-400 mr-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
        </div>

        {/* Products */}
        <div class="grid grid-cols-2 gap-x-3 gap-y-5">
          {[...Array(2)].map((el) => (
            <div class="space-y-6">
              <div class="relative">
                <div class="card h-52">
                  <img src={Prod} class="object-contain w-full" alt="prod" />
                </div>
                <div class="price flex text-white font-semibold flex-row relative justify-center items-center">
                  <h6 class="absolute left-1 top-3 text-xs">₪</h6>
                  <h3 class="mx-auto">280</h3>
                </div>
              </div>
              <div>
                <h1 class="capitalize text-center font-bold text-2xl">Lorem ipsum</h1>
                <h2 class="capitalize text-center text-lg mx-6">Seasonal Blooms</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div class="footer container mx-auto px-4 py-6">
        <div class="space-y-2">
          <h1 class="capitalize font-bold text-2xl">fast flower delivery</h1>
          <p class="capitalize text-sm mr-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio sem suspendisse placerat consequat egestas
            faucibus nulla nec. Donec tortor quis risus molestie in quam habitant aliquam.
          </p>

          <div class="flex flex-row space-x-2 py-2">
            <svg width="40" height="40" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24.4736" height="24.4736" rx="12.2368" fill="#F3F3F3" />
              <g clip-path="url(#clip0_102_391)">
                <path
                  d="M14.9703 13.2693L15.2966 11.1654H13.2567V9.80018C13.2567 9.22461 13.5416 8.66357 14.4552 8.66357H15.3826V6.87237C15.3826 6.87237 14.5411 6.73024 13.7364 6.73024C12.0565 6.73024 10.9584 7.73789 10.9584 9.56201V11.1654H9.09094V13.2693H10.9584V18.3552H13.2567V13.2693H14.9703Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_102_391">
                  <rect width="7.34208" height="11.625" fill="white" transform="translate(8.5658 6.73024)" />
                </clipPath>
              </defs>
            </svg>

            <svg width="40" height="40" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.26355" width="24.4736" height="24.4736" rx="12.2368" fill="#F3F3F3" />
              <g clip-path="url(#clip0_102_392)">
                <path
                  d="M12.5025 9.76315C11.1128 9.76315 9.99182 10.8666 9.99182 12.2346C9.99182 13.6027 11.1128 14.7061 12.5025 14.7061C13.8923 14.7061 15.0133 13.6027 15.0133 12.2346C15.0133 10.8666 13.8923 9.76315 12.5025 9.76315ZM12.5025 13.8414C11.6045 13.8414 10.8702 13.1209 10.8702 12.2346C10.8702 11.3484 11.6023 10.6278 12.5025 10.6278C13.4028 10.6278 14.1348 11.3484 14.1348 12.2346C14.1348 13.1209 13.4006 13.8414 12.5025 13.8414ZM15.7016 9.66205C15.7016 9.98255 15.4394 10.2385 15.116 10.2385C14.7904 10.2385 14.5304 9.9804 14.5304 9.66205C14.5304 9.3437 14.7926 9.08558 15.116 9.08558C15.4394 9.08558 15.7016 9.3437 15.7016 9.66205ZM17.3645 10.2471C17.3273 9.47491 17.1482 8.7909 16.5735 8.22733C16.001 7.66377 15.3061 7.48739 14.5216 7.44867C13.7131 7.4035 11.2898 7.4035 10.4813 7.44867C9.69901 7.48524 9.00413 7.66162 8.42944 8.22518C7.85475 8.78875 7.67775 9.47276 7.63842 10.245C7.59253 11.0408 7.59253 13.4263 7.63842 14.2222C7.67557 14.9944 7.85475 15.6784 8.42944 16.242C9.00413 16.8055 9.69682 16.9819 10.4813 17.0206C11.2898 17.0658 13.7131 17.0658 14.5216 17.0206C15.3061 16.9841 16.001 16.8077 16.5735 16.242C17.146 15.6784 17.3252 14.9944 17.3645 14.2222C17.4104 13.4263 17.4104 11.043 17.3645 10.2471ZM16.32 15.0761C16.1495 15.4977 15.8196 15.8225 15.3891 15.9924C14.7445 16.2441 13.2149 16.186 12.5025 16.186C11.7902 16.186 10.2584 16.242 9.61597 15.9924C9.18769 15.8247 8.85773 15.4999 8.6851 15.0761C8.42944 14.4416 8.48844 12.9359 8.48844 12.2346C8.48844 11.5334 8.43163 10.0256 8.6851 9.39318C8.85554 8.97158 9.1855 8.64678 9.61597 8.47685C10.2606 8.22518 11.7902 8.28326 12.5025 8.28326C13.2149 8.28326 14.7467 8.22733 15.3891 8.47685C15.8174 8.64463 16.1474 8.96943 16.32 9.39318C16.5757 10.0277 16.5167 11.5334 16.5167 12.2346C16.5167 12.9359 16.5757 14.4437 16.32 15.0761Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_102_392">
                  <rect width="9.78943" height="11.0131" fill="white" transform="translate(7.60559 6.73024)" />
                </clipPath>
              </defs>
            </svg>

            <svg width="40" height="40" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.526489" width="24.4736" height="24.4736" rx="12.2368" fill="#F3F3F3" />
              <g clip-path="url(#clip0_102_393)">
                <path
                  d="M17.1378 10.1066C17.1448 10.2011 17.1448 10.2956 17.1448 10.39C17.1448 13.2715 14.8737 16.5917 10.7228 16.5917C9.44397 16.5917 8.25601 16.234 7.25671 15.6132C7.43841 15.6334 7.61309 15.6402 7.80178 15.6402C8.85696 15.6402 9.82831 15.296 10.604 14.7089C9.61168 14.6887 8.7801 14.0611 8.49359 13.1973C8.63336 13.2175 8.77311 13.231 8.91987 13.231C9.12252 13.231 9.32519 13.204 9.51385 13.1568C8.47963 12.9543 7.70393 12.0771 7.70393 11.0176V10.9906C8.0044 11.1526 8.35384 11.2538 8.72417 11.2673C8.11621 10.8759 7.71791 10.2078 7.71791 9.45201C7.71791 9.04712 7.8297 8.67597 8.02538 8.35205C9.13648 9.67471 10.8066 10.5385 12.6794 10.633C12.6445 10.471 12.6235 10.3023 12.6235 10.1336C12.6235 8.9324 13.6298 7.95392 14.8806 7.95392C15.5305 7.95392 16.1175 8.2171 16.5298 8.64224C17.0399 8.54777 17.5291 8.36556 17.9624 8.11588C17.7946 8.62201 17.4382 9.04714 16.9701 9.31706C17.4243 9.26984 17.8645 9.14835 18.2698 8.97966C17.9624 9.41153 17.578 9.79616 17.1378 10.1066Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_102_393">
                  <rect width="11.0131" height="9.17759" fill="white" transform="translate(7.25671 7.95392)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
});
