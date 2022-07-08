/**
 *
 * @description ssr-demo.js
 * @author yikkok <yikok.yong@gmail.com>
 * @version 1.0.0
 * @since 08 July 2022
 *
 */

export default function SsrDemo({ userAgent }) {
  return (
    <div className="max-w-[1024px] mx-auto mt-4">
      <h1 className="text-3xl">SSR Demo - Get User Agent from Server Side</h1>

      <p>{userAgent}</p>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      userAgent: ctx.req.headers["user-agent"],
    },
  };
};
