class UserController < ApplicationController

  # method for show the row and column based user selection
  def show
    @matrix_size = params[:matrix_id].to_i
    render :partial=>'load_matrix'
  end

  def update
    random_array = params[:random_value_generated].split(",").map { |s| s.to_i }
    clickedarray = params[:user_clicked].split(",").map { |s| s.to_i }

    matches = clickedarray & random_array
    matches = matches.uniq

    if random_array.size ==  matches.size
      flash[:notice]  = "congratulations you have completed the level"
    else
      flash[:notice] = "Sorry, you lost your clicks matches only #{matches.size}"
    end

    redirect_to :user_index
  end

end
