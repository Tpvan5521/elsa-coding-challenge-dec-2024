export function resolve<D = any>(data: D) {
  return {
    success: true,
    message: "Successfully",
    data,
  };
}

export function reject<D = any>(data?: D) {
  return {
    success: false,
    message: "Something went wrong",
    ...(data ? { data } : {}),
  };
}
