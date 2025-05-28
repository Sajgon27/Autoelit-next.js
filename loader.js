export default function imgixLoader = ({ src, width, quality }) => {
  const url = new URL(`https://smd-web-314690922.imgix.net${src}`)
  const params = url.searchParams
  params.set("auto", params.getAll("auto").join(",") || "format")
  params.set("fit", params.get("fit") || "max")
  params.set("w", params.get("w") || width.toString())
  return url.href
}