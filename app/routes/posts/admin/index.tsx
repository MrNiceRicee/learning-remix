import { Link } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/server-runtime/dist/router";
import { json } from "@remix-run/node";
import { requireAdminUser } from "~/session.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await requireAdminUser(request);
  return json({});
};

export default function AdminIndexRoute() {
  return (
    <Link
      to="new"
      className="relative inline-block w-full rounded-md border-2 border-gray-200 p-2 text-center text-sm font-medium text-gray-700 transition duration-300  ease-in-out hover:border-gray-300 hover:text-gray-900"
    >
      New Post
    </Link>
  );
}
