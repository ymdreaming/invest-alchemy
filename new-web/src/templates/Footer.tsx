import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter
        logo={<Logo />}
        iconList={
          <>
            <Link href="https://twitter.com/bmpi11">
              <a>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
            </Link>

            <Link href="https://www.youtube.com/channel/UCbg-Y24Z1H0nONW-bxgzv6w">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              </a>
            </Link>

            <Link href="mailto:bmpidev@gmail.com">
              <a>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.585 5.267c1.834 0 3.558.811 4.824 2.08v.004c0-.609.41-1.068.979-1.068h.145c.891 0 1.073.842 1.073 1.109l.005 9.475c-.063.621.64.941 1.029.543 1.521-1.564 3.342-8.038-.946-11.79-3.996-3.497-9.357-2.921-12.209-.955-3.031 2.091-4.971 6.718-3.086 11.064 2.054 4.74 7.931 6.152 11.424 4.744 1.769-.715 2.586 1.676.749 2.457-2.776 1.184-10.502 1.064-14.11-5.188C-.977 13.521-.847 6.093 5.62 2.245 10.567-.698 17.09.117 21.022 4.224c4.111 4.294 3.872 12.334-.139 15.461-1.816 1.42-4.516.037-4.498-2.031l-.019-.678c-1.265 1.256-2.948 1.988-4.782 1.988-3.625 0-6.813-3.189-6.813-6.812 0-3.659 3.189-6.885 6.814-6.885zm4.561 6.623c-.137-2.653-2.106-4.249-4.484-4.249h-.09c-2.745 0-4.268 2.159-4.268 4.61 0 2.747 1.842 4.481 4.256 4.481 2.693 0 4.464-1.973 4.592-4.306l-.006-.536z" />
                </svg>
              </a>
            </Link>

            <Link href="https://umami.bmpi.dev/share/ilNU9n5V/money.bmpi.dev">
              <a>
                <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                  <path d="M58.9,0c12.68,0,24.43,4.01,34.04,10.83l-3.74,3.95C80.58,8.85,70.14,5.38,58.9,5.38c-14.78,0-28.16,5.99-37.84,15.67 C11.37,30.74,5.38,44.12,5.38,58.9c0,14.78,5.99,28.16,15.67,37.84c9.68,9.68,23.06,15.67,37.84,15.67 c14.78,0,28.16-5.99,37.84-15.67c6.56-6.56,11.42-14.82,13.88-24.05c-2.44-1.41-4.08-4.05-4.08-7.08c0-3.71,2.48-6.85,5.87-7.84 c-0.24-11.63-4.19-22.34-10.72-31.01l3.75-3.96c7.58,9.76,12.16,21.97,12.35,35.24c2.99,1.22,5.09,4.15,5.09,7.57 c0,4.1-3.02,7.5-6.96,8.08c-2.67,10.32-8.07,19.55-15.38,26.86c-10.66,10.66-25.38,17.25-41.65,17.25 c-16.26,0-30.99-6.59-41.65-17.25C6.59,89.89,0,75.16,0,58.9c0-16.26,6.59-30.99,17.25-41.65C27.91,6.59,42.63,0,58.9,0L58.9,0z M58.9,48.6c1.77,0,3.44,0.45,4.9,1.24c0.07-0.1,0.15-0.19,0.23-0.27l33.74-35.49c1.02-1.07,2.72-1.12,3.79-0.09 c1.07,1.02,1.12,2.72,0.09,3.79L67.92,53.26c-0.08,0.08-0.16,0.16-0.25,0.23c0.97,1.57,1.53,3.42,1.53,5.4 c0,5.69-4.61,10.3-10.3,10.3c-5.69,0-10.3-4.61-10.3-10.3C48.6,53.21,53.21,48.6,58.9,48.6L58.9,48.6z M62.47,90.92 c3.02,0,5.66,1.64,7.08,4.08c6.11-1.8,11.57-5.11,15.96-9.49c6.81-6.81,11.02-16.22,11.02-26.61c0-7.51-2.2-14.51-5.99-20.38 l3.84-4.05c4.79,6.94,7.6,15.36,7.6,24.43c0,11.89-4.82,22.66-12.62,30.46c-5.15,5.15-11.6,9-18.81,11.02 c-0.62,3.9-3.99,6.89-8.07,6.89c-3.58,0-6.61-2.3-7.72-5.49c-10.24-0.98-19.43-5.54-26.31-12.42 c-7.79-7.79-12.62-18.56-12.62-30.46c0-9.77,3.25-18.77,8.73-26c-0.48-1.04-0.74-2.19-0.74-3.41c0-4.51,3.66-8.17,8.17-8.17 c1.47,0,2.86,0.39,4.05,1.07c6.63-4.16,14.46-6.56,22.86-6.56c8.46,0,16.34,2.44,23,6.65l-3.83,4.04 c-5.61-3.33-12.17-5.24-19.17-5.24c-7.04,0-13.64,1.94-19.28,5.3c0.35,0.91,0.54,1.89,0.54,2.92c0,4.51-3.66,8.17-8.17,8.17 c-1.28,0-2.5-0.3-3.58-0.82c-4.49,6.2-7.14,13.82-7.14,22.06c0,10.39,4.21,19.8,11.02,26.61c5.9,5.9,13.75,9.85,22.5,10.8 C55.93,93.16,58.94,90.92,62.47,90.92L62.47,90.92z M58.9,31.58c4.23,0,8.24,0.96,11.82,2.68l-3.63,3.83 c-0.12,0.12-0.23,0.25-0.34,0.38c-2.44-0.94-5.08-1.45-7.85-1.45c-6.04,0-11.51,2.45-15.47,6.41c-3.96,3.96-6.41,9.43-6.41,15.47 c0,6.04,2.45,11.51,6.41,15.47c3.96,3.96,9.43,6.41,15.47,6.41c6.04,0,11.51-2.45,15.47-6.41c3.96-3.96,6.41-9.43,6.41-15.47 c0-2.97-0.59-5.79-1.66-8.37c0.18-0.16,0.35-0.32,0.52-0.5l3.52-3.71c1.96,3.77,3.07,8.05,3.07,12.58c0,7.54-3.06,14.37-8,19.31 c-4.94,4.94-11.77,8-19.31,8c-7.54,0-14.37-3.06-19.31-8c-4.94-4.94-8-11.77-8-19.31c0-7.54,3.06-14.37,8-19.31 C44.53,34.64,51.35,31.58,58.9,31.58L58.9,31.58z" />
                </svg>
              </a>
            </Link>
          </>
        }
      ></CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
